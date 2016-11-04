import {connect} from 'react-redux';
import Main from '../components/Main';

//创建组件容器，可以对传入组件的props值进行过滤组合 类似于自定义中间件
//http://cn.redux.js.org/docs/react-redux/api.html
export default connect(
    /*[mapStateToProps(state, [ownProps]): stateProps] (Function)如果定义该参数，组件将会监听 Redux store 的变化。
     *任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
     *该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，
     *你的组件将不会监听 Redux store。如果指定了该回调函数中的第二个参数 ownProps，
     *则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，mapStateToProps 也会被调用
     *@param state store中取得的全局state
     *@ownProps 从父组件传入的props
     * return 传给包装组件的props
     */
    (state, ownProps)=> {
        return {
            modalSrc : state.getIn(['modal', 'modalSrc'])
        };
    },
    /*
     * [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): 如果传递的是一个对象，
     * 那么每个定义在该对象的函数都将被当作 Redux action creator，而且这个对象会与 Redux store 绑定在一起，
     * 其中所定义的方法名将作为属性名，合并到组件的 props 中。如果传递的是一个函数，该函数将接收一个 dispatch 函数，
     * 然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起
     * （提示：你也许会用到 Redux 的辅助函数 bindActionCreators()）。
     * 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
     * 如果指定了该回调函数中第二个参数 ownProps，该参数的值为传递到组件的 props，而且只要组件接收到新 props，
     * mapDispatchToProps 也会被调用。
     * */
    (dispatch)=> {
        return {}
    },
    /*
     * [mergeProps(stateProps, dispatchProps, ownProps): props] (Function): 如果指定了这个参数，
     * mapStateToProps() 与 mapDispatchToProps() 的执行结果和组件自身的 props 将传入到这个回调函数中。
     * 该回调函数返回的对象将作为 props 传递到被包装的组件中。你也许可以用这个回调函数，根据组件的 props 来筛选部分的 state 数据，
     * 或者把 props 中的某个特定变量与 action creator 绑定在一起。如果你省略这个参数，
     * 默认情况下返回 Object.assign({}, ownProps, stateProps, dispatchProps) 的结果
     *
     * */
    (stateProps, dispatchProps, ownProps)=> {
        return Object.assign({}, ownProps, stateProps, dispatchProps);
    },
    /*
     * [options] (Object) 如果指定这个参数，可以定制 connector 的行为。
     [pure = true] (Boolean): 如果为 true，connector 将执行 shouldComponentUpdate 并且浅对比 mergeProps 的结果，
     避免不必要的更新，前提是当前组件是一个“纯”组件，它不依赖于任何的输入或 state 而只依赖于 props 和 Redux store 的 state。默认值为 true。
     [withRef = false] (Boolean): 如果为 true，connector 会保存一个对被包装组件实例的引用，该引用通过 getWrappedInstance() 方法获得。
     默认值为 false
     * */
    {},
)(Main);
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/state/counter/counterSlice";


const Counter = () => {

    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch()
    return (
        <div className="card">
            <div className='card-header bg-secondary'>
            <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={() => dispatch(increment())} className='btn btn-success'>Increase</button>
                    <button onClick={() => dispatch(decrement())} className='btn btn-danger mx-2'>Increase</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
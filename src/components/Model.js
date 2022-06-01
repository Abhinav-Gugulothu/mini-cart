import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal, openModal } from "../features/Modal/modelSlice";


function Model()
{
    const dispatch = useDispatch();
    return(
        <aside className='modal-container'>
        <div className='modal'>
          <h4>Remove all items from your shopping cart?</h4>
          <div className='btn-container'>
            <button type='button' className='btn confirm-btn' onClick={() => {
                dispatch(openModal());
                dispatch(clearCart());
                dispatch(closeModal());
            }}>
              confirm
            </button>
            <button type='button' className='btn clear-btn' onClick={() => dispatch(closeModal())}>
              cancel
            </button>
          </div>
        </div>
      </aside>
    )
}

export default Model;
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Button() {

    const [subscribe, setSubscribe] = useState(false);

    return (
        <>
            <button onClick={() => {
                toast.success("Felicidades");
                setSubscribe(!subscribe);
            }
            }>
                {
                    subscribe ? "Ya estas suscripto" : "Suscribete"
                }
            </button>
            <ToastContainer />
        </>
    )
}

export default Button;
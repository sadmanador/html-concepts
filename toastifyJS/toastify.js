{/*
 <ToastContainer enableMultiContainer containerId={'positive'} position="top-center" toastStyle={{ fontSize: '1.5em' }}></ToastContainer>
<ToastContainer enableMultiContainer containerId={'negative'} position="top-center" toastStyle={{ color: "white", fontSize: '1.5em', backgroundColor: 'crimson' }}></ToastContainer> 
*/}


const notify = () => toast("Right Answer", { containerId: 'positive' });
const notifyNegative = () => toast(`dynamic toast ${400}`, { containerId: 'negative' });

// calling the toast function is required
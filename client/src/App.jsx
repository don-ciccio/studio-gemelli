import axios from "axios";
import { useState } from "react";

function App() {
    const [data, setData] = useState();
    const urlWithProxy = "/api/v1";

    function getDataFromServer() {
        axios
            .get(urlWithProxy)
            .then((res) => setData(res.data))
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={getDataFromServer}
                >
                    Access server using proxy
                </button>
            </div>
            <div>
                <p>data : {data}</p>
            </div>
        </div>
    );
}

export default App;

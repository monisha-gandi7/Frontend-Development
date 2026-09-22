import {formik,form} from 'react-bootstrap';

function Formik() {
    const {name,setName} = useState('');
    const {id,setId} = useState('');
    return ( 
        <formik>
            <form>
                <label >Name:</label>   
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label >Id:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </form>
        </formik>
    )
}

        
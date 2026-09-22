import {forms} from 'react-bootstrap';

function Forms() {
    const {name,setName} = useState('');
    const {id,setId} = useState('');
    return (
        <div>
            <form>
                <label >Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label >Id:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}       
         
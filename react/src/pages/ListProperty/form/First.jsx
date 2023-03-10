import { cities,types } from "../../../data/dataForm";
const First = ({ formData, setFormData }) => {
    return (
        <div className='input-form'>
            <label htmlFor="name"><span>* </span>Name</label>
            <input type="text" name="name" placeholder='hotel name' value={formData.name} id="name" onChange={(e) => {setFormData({ ...formData, name: e.target.value })}}/>

            <label htmlFor="type"><span>* </span>type</label>
            <select name="type" id='type'
                value={formData.type}
                onChange={(e) => {setFormData({ ...formData, type: e.target.value })}}
            >
                {types.map((type) => (
                <option value={type}>{type}</option>
                ))}
            </select>

            <label htmlFor="city"><span>* </span>city</label>
            <select name="city" id='city'
                value={formData.city}
                onChange={(e) => {setFormData({ ...formData, city: e.target.value })}}
            >
                {cities.map((city) => (
                <option value={city.ville}>{city.ville}</option>
                ))}
            </select>

            <label htmlFor="address"><span>* </span>Address</label>
            <input type="text" name="address" placeholder='hotel address' id="address"
            value={formData.address}
            onChange={(e) => {setFormData({ ...formData, address: e.target.value })}}
            />
        </div>
     );
}

export default First;

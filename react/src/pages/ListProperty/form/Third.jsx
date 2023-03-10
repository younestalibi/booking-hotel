const Third = ({ formData, setFormData }) => {
    return (
        <div className='input-form'>
            <label htmlFor="min_price"><span>* </span>Price:</label>
            <input type="number" name="min_price" placeholder='min price of your rooms' id="min_price"  value={formData.min_price} onChange={(e) => {setFormData({ ...formData, min_price: parseInt(e.target.value) })}}/>

            <label htmlFor="rate"><span>* </span>Rate:</label>
            <input type="number" name="rate" placeholder='Rate' id="rate"  value={formData.rate} onChange={(e) => {setFormData({ ...formData, rate: parseFloat(e.target.value) })}}/>

            <label htmlFor="rooms"><span>* </span>How many rooms:</label>
            <input type="number" name="rooms" placeholder='Number rooms' id="rooms"  value={formData.rooms} onChange={(e) => {setFormData({ ...formData, rooms: parseInt(e.target.value) })}}/>
        </div>
     );
}

export default Third;

const Room = ({ formData, setFormData }) => {
    return (
        <div className='input-form'>
            <label htmlFor="room-number"><span>* </span>Number of the room:</label>
            <input type="number" name="room-number" id="room-number" placeholder='101,102...'
            onChange={(e) => {setFormData({ ...formData, room_number: parseInt(e.target.value) })}}
            />

            <label htmlFor="max-people"><span>* </span>Max people:</label>
            <input type="number" name="max-people" id="max-people"
            value={formData.max_people}
            onChange={(e) => {setFormData({ ...formData, max_people: parseInt(e.target.value) })}}
            />

            <label htmlFor="price"><span>* </span>Price per night:</label>
            <input type="number" name="price" id="price"
            placeholder='1000 MAD'
            onChange={(e) => {setFormData({ ...formData, price_night: parseInt(e.target.value) })}}
            />

            <label htmlFor="room-description"><span>* </span>Description:</label>
            <textarea name="room-description" id="room-description" placeholder="Description..." rows="5"
            value={formData.details}
            onChange={(e) => {setFormData({ ...formData, details: e.target.value })}}
            ></textarea>

        </div>
     );
}

export default Room;

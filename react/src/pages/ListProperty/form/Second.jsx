const Second = ({ formData, setFormData }) => {
    return (
        <div className='input-form'>
            <label htmlFor="center"><span>* </span>How far from center city per meter:</label>
            <input type="number" name="center" id="center"
            value={formData.center}
            onChange={(e) => {setFormData({ ...formData, center: parseInt(e.target.value) })}}
            />

            <label htmlFor="beach"><span>* </span>Is it close to beach:</label>
            <select name="beach" id="beach"
            onChange={(e) => {setFormData({ ...formData, beach: parseInt(e.target.value) })}}
            >
                <option value={0}>No</option>
                <option value={1}>Yes</option>
            </select>

           <label htmlFor="subtitle">Subtitle:</label>
            <input type="text" name="subtitle" id="subtitle"
            value={formData.subtitle}
            onChange={(e) => {setFormData({ ...formData, subtitle:e.target.value })}}
            />

            <label htmlFor="description"><span>* </span>Description:</label>
            <textarea name="description" id="description" placeholder="Description..." rows="10"
            value={formData.description}
            onChange={(e) => {setFormData({ ...formData, description: e.target.value })}}
            ></textarea>
        </div>
     );
}

export default Second;

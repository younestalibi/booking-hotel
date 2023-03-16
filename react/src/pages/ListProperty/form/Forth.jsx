import {AiOutlineCloseSquare,AiOutlinePlus} from 'react-icons/ai'
const Forth = ({ formData, setFormData }) => {

    const handleDeleteClick = (index) => {
        const files = [...formData.images];
        files.splice(index, 1);
        setFormData({ ...formData, images:files});
      };

    return (
        <div className='input-form'>
            <label htmlFor="hotel-upload"><span>* </span>Selecte some images for your item:</label>

            <input type="file" id='hotel-upload' className="hotel-upload"
                onChange={(e) => {setFormData({ ...formData, images:[...formData.images ,e.target.files[0]] })}}
            />
            <div className="upload-hotel-container">
                <div className="upload-image-hotel" onClick={()=>{document.getElementById('hotel-upload').click()}}>
                    <AiOutlinePlus/>
                </div>
                {formData.images.length > 0 && (
                    <div className="selected-images">
                    {formData.images.map((file, index) => (
                        <div key={index} className='unselected-container'>
                        <AiOutlineCloseSquare onClick={() => handleDeleteClick(index)}/>
                        <img
                            width='50'
                            height='50'
                            src={URL.createObjectURL(file)}
                            alt={`Selected file ${index + 1}`}
                            onClick={() => handleDeleteClick(index)}
                        />


                        </div>
                    ))}
                    </div>
                )}
            </div>
        </div>
     );
}

export default Forth;

export default function Interests({ data, setData, errors }) {
    const { interests } = data;

    const handleDataChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            interests: e.target.checked ? [...prevState.interests, e.target.name] : prevState.interests.filter((i) => i != e.target.name)
        }))
    }
    return (
        <div>
            <div>
                <label>
                    <input onChange={handleDataChange} type="checkbox" name="coding" checked={interests.includes("coding")}></input>
                    Coding
                </label>
            </div>

            <div>
                <label>
                    <input onChange={handleDataChange} type="checkbox" name="music" checked={interests.includes("music")}></input>
                    Music
                </label>
            </div>

            <div>
                <label>
                    <input onChange={handleDataChange} type="checkbox" name="javascript" checked={interests.includes("javascript")}></input>
                    Javascript
                </label>
            </div>

            {errors.interests && <span className="error">{errors.interests}</span>}

        </div>
    )
}
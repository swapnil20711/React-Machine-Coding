export default function Profile({ data, setData, errors }) {
    const { name, email, age } = data;

    const handleDataChange = (e, item) => {
        setData((prevState) => ({
            ...prevState,
            [item]: e.target.value
        }))
    }
    return (
        <div className="profile-tab">
            <div className="field-container">
                <label>Name :</label>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                        onChange={(e) => {
                            handleDataChange(e, "name")
                        }}
                        type={"text"}
                        value={name}
                        style={{ marginLeft: "4px" }}></input>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
            </div>
            <div className="field-container">
                <label>Age :</label>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                        onChange={(e) => {
                            handleDataChange(e, "age")
                        }}
                        type={"number"}
                        value={age}
                        style={{ marginLeft: "4px" }}></input>
                    {errors.age && <span className="error">{errors.age}</span>}
                </div>
            </div>
            <div className="field-container">
                <label>Email :</label>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                        onChange={(e) => {
                            handleDataChange(e, "email")
                        }}
                        type={"email"}
                        value={email}
                        style={{ marginLeft: "4px" }}></input>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
            </div>
        </div>
    )
}
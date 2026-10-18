import { useState } from "react"
import Interests from "./Interests"
import Profile from "./Profile"
import Settings from "./Settings"

export default function TabForm() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [data, setData] = useState({ name: "Swapnil", age: "25", email: "swapnil.bhojwani@gmail.com", interests: ["coding", "javascript"], theme: "dark" })
    const [errors, setErrors] = useState({ name: "Name is invalid" });

    const TABS = [
        {
            name: "Profile", component: Profile, validate: () => {
                const err = {};
                if (!data.name || data.name.length < 2) {
                    err.name = "Name is not valid"
                }

                if (!data.age || data.age < 18) {
                    err.age = "Age is not valid"
                }

                if (!data.email || data.email.length < 2) {
                    err.email = "Email is not valid"
                }

                setErrors(err);

                return err.name || err.age || err.email ? false : true;
            }
        },
        {
            name: "Interests", component: Interests, validate: () => {
                const err = {};
                if (data.interests.length < 1) {
                    err.interests = "Please select atleast one interest"
                }

                setErrors(err);

                return err.interests ? false : true;
            }
        },
        { name: "Settings", component: Settings, validate: () => true }
    ]
    const ActiveTabComponent = TABS[selectedTab].component

    const handlePrevClick = () => {
        if (TABS[selectedTab].validate()) {
            setSelectedTab((index) => index - 1)
        }
    }

    const handleNextClick = () => {
        if (TABS[selectedTab].validate()) {
            setSelectedTab((index) => index + 1)
        }
    }

    const handleSubmitClick = () => {
        console.log('data is : ', data);
    }

    return (
        <div>
            <div className="heading-container">
                {TABS.map((tab, index) =>
                    <div
                        key={index}
                        className={index === selectedTab ? "heading-selected" : "heading"}
                        onClick={() => {
                            setSelectedTab(index)
                        }}>
                        {tab.name}
                    </div>
                )}
            </div>
            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData} errors={errors} />
            </div>
            <div style={{ flexDirection: "row", display: "flex", marginTop: "4px", gap: 4 }}>
                {selectedTab > 0 &&
                    <div>
                        <button onClick={handlePrevClick}>Prev</button>
                    </div>
                }
                {
                    selectedTab !== TABS.length - 1 &&
                    <div>
                        <button onClick={handleNextClick}>Next</button>
                    </div>
                }
                {selectedTab === TABS.length - 1 &&
                    <div>
                        <button onClick={handleSubmitClick}>Submit</button>
                    </div>}
            </div>
        </div>
    )
}
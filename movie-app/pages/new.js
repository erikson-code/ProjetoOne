import Resources from "./api/resources"
import NavBar from "../components/navbar"
const ResourceCreatePage = () => {

    return (
        <>
            <NavBar></NavBar>
            <div style={{ width: "60%", margin: "0 auto", marginTop: "20px" , marginBottom: "20px"}}>
                <h1 style={{ fontSize: "30px", marginBottom: "10px", fontWeight: "bold" }}>Add new Resource</h1>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Learn Next JS and Sanity" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Link</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="https:://link.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div classNameName="field" style = {{marginBottom: "20px"}}>
                    <label className="label">Time to Finish</label>
                    <div className="control">
                        <input className="input" type="number" placeholder="60 (time to finish)" />
                    </div>
                </div>



                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ResourceCreatePage
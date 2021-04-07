import Resources from "./api/resources"
import NavBar from "../components/navbar"
import { useState } from "react"
import axios from 'axios'

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "http://",
    priority: "2",
    timeToFinish: ""
}

const ResourceCreatePage = () => {


    const [form, setForm] = useState(DEFAULT_DATA)

    const submitForm = () => {
        
        axios.post("/api/resources",form)
        .then(response=>{alert(response.data)})
        .catch(error=>{alert(error?.response?.data)})
    }

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    const resetForm = () => setForm(DEFAULT_DATA)


    return (

        <form>
            <NavBar></NavBar>
            <div style={{ width: "60%", margin: "0 auto", marginTop: "20px", marginBottom: "20px" }}>
                <h1 style={{ fontSize: "30px", marginBottom: "10px", fontWeight: "bold" }}>Add new Resource</h1>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="input"
                            type="text"
                            placeholder="Learn Next JS and Sanity" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            onChange={handleChange}
                            name="description"

                            value={form.description}
                            className="textarea"
                            placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Link</label>
                    <div className="control">
                        <input
                            name="link"
                            value={form.link}
                            onChange={handleChange}
                            className="input"
                            type="text"
                            placeholder="https:://link.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                        <div className="select">
                            <select
                                onChange={handleChange}
                                name="priority"
                                value={form.priority}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div className="field" style={{ marginBottom: "20px" }}>
                    <label className="label">Time to Finish</label>
                    <div className="control">
                        <input
                            name="timeToFinish"
                            onChange={handleChange}
                            value={form.timeToFinish}
                            className="input"
                            type="number"
                            placeholder="60" />
                    </div>
                    <p className="help">Time is in minutes</p>
                </div>



                <div className="field is-grouped">
                    <div className="control">
                        <button type="button" onClick={submitForm}
                            className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button type = "button" onClick = {resetForm} className="button is-link is-light">Reset Form</button>
                    </div>
                </div>
            </div>
        </form>

    )

}


export default ResourceCreatePage
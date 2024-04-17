import { useState, useEffect } from 'react'

function ControlledForm() {

    // controlled input uses state to track what the input value is in a state-related variable

    const [formText, setFormText] = useState('')
    const [count, setCount] = useState(0)

    // on every keystroke will set the formText using the setter function
    // function eventHandler(event) {
    //     setFormText(event.target.value)
    // }

    useEffect(() => {
        console.log("Second useEffect is firing!")
        setCount(count + 1)
    }, [formText])
    // this useEffect will fire every time formText changes

    return (
        <form>

            <input name="age" 
            onChange={ e => setFormText(e.target.value) } 
            value={ formText } />
            {/* value={formText} makes it so the input always reads as what the state says */}
            <p>{formText}</p>
            <p>{count}</p>
            <input type="submit" value="I am the submit button" />

        </form>
    )

}

export default ControlledForm
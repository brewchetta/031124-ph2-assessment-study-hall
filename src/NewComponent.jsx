function NewComponent({coolData}) {
    // props.data is an object

    // destructuring breaks down a js object into new variables
    // const { coolData, whatever, somethingElse } = props

    return (
        <>
            <p>I am a function that returns .... something kinda like HTML</p>
            <p>This is actually JSX</p>
            <p>It looks like HTML but it is in fact JSX</p>

            <p>Incoming data: {coolData}</p>
        </>
    )
}

export default NewComponent
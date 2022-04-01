import React from 'react'

const Update = (props) => {
    return(
        <div>
            <form>
                <input type='text' placeholder={'Pokemon Number'} />
                    <br />
                <input type='text' placeholder={'Pokemon Name'} />
                    <br />
                <input type='text' placeholder={'Image URL'} />
                    <br />
                <input type='text' placeholder={'Pokemon Height'} />
                    <br />
                <input type='text'  placeholder={'Pokemon Weight'} />
                    <br />
                <input type='text' id={'type'} name={'type'} placeholder={'Pokemon Type'} />
                    <br />
                <input type='text' id={'weaknesses'} name={'weaknesses'} placeholder={'Pokemon Weaknesses'} />
                    <br />
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Update
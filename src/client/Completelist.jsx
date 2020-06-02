import React from 'react';

class Completelist extends React.Component{
    render(){
        const completeList = this.props.completeList.map(task => {
                return (
                    <p>{task}</p>
                )
            })

        return(
            <div>
                {completeList}
            </div>
        )
    }
}

export default Completelist;
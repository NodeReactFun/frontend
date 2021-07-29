import React from 'react';

class MediaCard extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div class="card" style={{width: "18rem", maxWidth: "345"}}>
                <div class="card-body">
                    <div class="card-title">
                        {this.props.name}
                    </div>
                    {this.props.desc}
                </div>
            </div>
        );
    }
}

export default MediaCard;

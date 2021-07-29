import React from 'react';

class MediaCard extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.desc}
                </div>
            </div>
        );
    }
}

export default MediaCard;
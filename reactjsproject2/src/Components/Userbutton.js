import React from 'react'
export default class Userbutton extends React.Component
{
    render()
    {
        return(
            <div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
					<button type="button" class="btn btn-danger btn-sm">Message</button>
				</div>
        )
    }
}
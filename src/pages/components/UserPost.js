import React from 'react'
import {Grid, Avatar, Paper, ListItemText, ListItemAvatar} from "@material-ui-core"

const postSTyle = {
    padding: "25px"
}

const postImageStyle = {
    padding: "5px",
    maxHeight: "4500px",
    maxWidth: "90vw"
}

const postTextStyle = {
    padding: "10px"
}

class UserPost extends React.Component {
    render(){
        return (
            <Paper style={postSTyle} elevation={2}>
                <Gird container>
                    <ListItemAvatar>
                        <Avatar alt={this.props.username} src={this.props.userAvatar}/>
                    </ListItemAvatar>
                    <h3>{this.props.username}</h3>
                </Gird>
                <Grid container justify='center'>
                    <img src={this.props.postImage} alt={this.props.postImageStyle} height="40%"/>
                </Grid>
                <Grid container style={postTextStyle}>
                    <ListItemText primary={this.props.postText} secondary={this.props.postDate}/>
                </Grid>
            </Paper>
        );
    }
}

export default UserPost;
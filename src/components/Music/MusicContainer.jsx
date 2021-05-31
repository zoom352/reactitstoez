import Music from "./Music"
import { connect } from 'react-redux';
import { addMusicAC } from "../../Redux/music-reducer";


const mapStateToProps = (state) => {
    return {
        musicAdd: state.musicInitial.musicAdd,
        NewPostMusic: state.musicInitial.NewPostMusic
    }
}

const mapDispatchToProps = (dispatch) => {
      return {
          sendMusic: (NewPostMusic) => {
              dispatch(addMusicAC(NewPostMusic));
          },
      }
}

let MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer
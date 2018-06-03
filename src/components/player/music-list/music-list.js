import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Scroll from 'base/scroll/scroll'

import './music-list.scss'

const MusicList = (props) => {
  const {show, toggleShow, list, music, onItemClick, deleteClick} = props;
  return (
    <div className={classNames('musicList', {active: show})}>
      <div className="musicList-mask" onClick={e => toggleShow(e, false)}/>
      <div className="musicList-wrapper mm-wrapper">
        <div className="musicList-header">
          当前歌曲数：{list.length}
          <span className="musicList-del"/>
        </div>
        <Scroll className="mm-content">
          {
            list.length > 0 && list.map((item, index) => (
              <div className={classNames('musicList-item', {active: item.id === music.id})} key={item.id}>
                <h2 onClick={() => onItemClick(item.id, index)}>{item.name}
                  <small>&nbsp;-&nbsp;{item.singer}</small>
                </h2>
                <span className="musicList-item-del" onClick={() => deleteClick(item.id, index)}/>
              </div>
            ))
          }
        </Scroll>
      </div>
    </div>
  )
};

MusicList.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
  list: PropTypes.any.isRequired,
  music: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

export default MusicList

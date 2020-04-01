import React from 'react'
import Users from "./Users"
import { connect } from 'react-redux'
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId => {
      dispatch(followAC(usersId))
    }),
    unfollow: (usersId => {
      dispatch(unfollowAC(usersId))
    }),
    setUsers: (users => {
      dispatch(setUsersAC(users))
    }),
    setCurrentPage: (pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    }),
    setTotalUsersCount: (totalCount => {
      dispatch(setUsersTotalCountAC(totalCount))
    }) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
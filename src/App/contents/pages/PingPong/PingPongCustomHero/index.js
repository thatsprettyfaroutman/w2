import './index.css'
import React, { Component } from 'react'
import MainTitle from 'App/components/MainTitle'

export default class extends Component {
  name = false

  componentDidMount() {
    this.name = location.search

    console.log(this.name)
  }

  render() {
    return (
      <div className="PingPongCustomHero">
        <PingPongLogo/>
        <PingPongBall/>
        <MainTitle centered>You have been challenged</MainTitle>
      </div>
    )
  }
}






const PingPongLogo = () => (
  <svg className="PingPongLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 85">
    <path className="ping" d="M37.4 18.7c0 2.2-0.4 4.1-1.1 5.6s-1.8 2.8-3.1 3.8c-1.3 1-2.9 1.7-4.7 2.1-1.8 0.5-3.7 0.7-5.7 0.7v7.6H12.5V6.5h10.2c2.1 0 4 0.2 5.7 0.7 1.8 0.5 3.3 1.2 4.7 2.1 1.3 1 2.4 2.2 3.1 3.8C37 14.6 37.4 16.5 37.4 18.7zM22.7 22.2h0.4c1.3 0 2.3-0.3 2.9-0.9 0.6-0.6 0.9-1.5 0.9-2.6 0-1.1-0.3-2-0.9-2.6-0.6-0.6-1.6-0.9-2.9-0.9h-0.4V22.2z"/>
    <path className="ping" d="M39.8 6.5h10.9v32H39.8V6.5z"/>
    <path className="ping" d="M54 6.5h8.4l8.8 12.3V6.5h10v32h-8.4l-8.8-12.3v12.3H54V6.5z"/>
    <path className="ping" d="M105.1 17.4c-0.6-0.5-1.3-0.9-2.2-1.2-0.9-0.3-1.7-0.4-2.5-0.4-0.9 0-1.8 0.2-2.5 0.5-0.8 0.3-1.4 0.8-2 1.4s-1 1.3-1.3 2.1c-0.3 0.8-0.5 1.7-0.5 2.7s0.2 1.9 0.5 2.7 0.8 1.5 1.4 2.1c0.6 0.6 1.3 1.1 2.1 1.4 0.8 0.3 1.7 0.5 2.6 0.5 1.1 0 2.1-0.2 3-0.7 0.9-0.5 1.7-1.1 2.3-1.9h-2.9v-6.7h12.3v10.7c-0.7 1.3-1.6 2.5-2.6 3.6-1 1.1-2.2 2-3.4 2.8s-2.6 1.4-4.1 1.8c-1.5 0.4-3 0.6-4.6 0.6-2.3 0-4.5-0.4-6.5-1.3-2-0.9-3.8-2-5.3-3.5s-2.7-3.3-3.6-5.3-1.3-4.3-1.3-6.6c0-2.3 0.4-4.5 1.3-6.5s2-3.8 3.4-5.3c1.5-1.5 3.2-2.7 5.2-3.6s4.2-1.3 6.5-1.3c1.8 0 3.3 0.2 4.7 0.5 1.3 0.4 2.4 0.8 3.3 1.2 1.1 0.5 1.9 1.1 2.6 1.7L105.1 17.4z"/>
    <path className="pong" d="M26.8 58.7c0 2.2-0.4 4.1-1.1 5.6-0.8 1.6-1.8 2.8-3.1 3.8-1.3 1-2.9 1.7-4.7 2.1-1.8 0.5-3.7 0.7-5.7 0.7v7.6H1.9V46.5h10.2c2.1 0 4 0.2 5.7 0.7 1.8 0.5 3.3 1.2 4.7 2.1s2.4 2.2 3.1 3.8C26.4 54.6 26.8 56.5 26.8 58.7zM12.1 62.2h0.4c1.3 0 2.3-0.3 2.9-0.9 0.6-0.6 0.9-1.5 0.9-2.6s-0.3-2-0.9-2.6c-0.6-0.6-1.6-0.9-2.9-0.9h-0.4C12.1 55.1 12.1 62.2 12.1 62.2z"/>
    <path className="pong" d="M28.5 62.5c0-2.3 0.4-4.5 1.3-6.5s2.1-3.8 3.6-5.3c1.5-1.5 3.3-2.7 5.4-3.6 2.1-0.9 4.2-1.3 6.5-1.3 2.3 0 4.5 0.4 6.5 1.3s3.8 2.1 5.4 3.6c1.5 1.5 2.7 3.3 3.6 5.4 0.9 2.1 1.3 4.2 1.3 6.5 0 2.3-0.4 4.5-1.3 6.5s-2.1 3.8-3.6 5.4c-1.5 1.5-3.3 2.7-5.3 3.6s-4.2 1.3-6.5 1.3c-2.3 0-4.5-0.4-6.5-1.3s-3.8-2.1-5.3-3.6c-1.5-1.5-2.7-3.3-3.6-5.3C28.9 67 28.5 64.8 28.5 62.5zM38.5 62.5c0 0.9 0.2 1.8 0.5 2.6s0.8 1.5 1.4 2.1c0.6 0.6 1.3 1.1 2.1 1.4s1.7 0.5 2.6 0.5 1.8-0.2 2.6-0.5 1.5-0.8 2.1-1.4 1.1-1.3 1.4-2.1 0.5-1.7 0.5-2.6-0.2-1.8-0.5-2.6-0.8-1.5-1.4-2.1c-0.6-0.6-1.3-1.1-2.1-1.4s-1.7-0.5-2.6-0.5-1.8 0.2-2.6 0.5-1.5 0.8-2.1 1.4c-0.6 0.6-1.1 1.3-1.4 2.1C38.7 60.7 38.5 61.6 38.5 62.5z"/>
    <path className="pong" d="M64.7 46.5h8.4l8.8 12.3V46.5h10v32H83.5l-8.8-12.3v12.3H64.7V46.5z"/>
    <path className="pong" d="M115.7 57.4c-0.6-0.5-1.3-0.9-2.2-1.2-0.9-0.3-1.7-0.4-2.5-0.4-0.9 0-1.8 0.2-2.5 0.5-0.8 0.3-1.4 0.8-2 1.4s-1 1.3-1.3 2.1c-0.3 0.8-0.5 1.7-0.5 2.7s0.2 1.9 0.5 2.7 0.8 1.5 1.4 2.1c0.6 0.6 1.3 1.1 2.1 1.4 0.8 0.3 1.7 0.5 2.6 0.5 1.1 0 2.1-0.2 3-0.7 0.9-0.5 1.7-1.1 2.3-1.9h-2.9v-6.7h12.3v10.7c-0.7 1.3-1.6 2.5-2.6 3.6-1 1.1-2.2 2-3.4 2.8-1.3 0.8-2.6 1.4-4.1 1.8s-3 0.6-4.6 0.6c-2.3 0-4.5-0.4-6.5-1.3-2-0.9-3.8-2-5.3-3.5s-2.7-3.3-3.6-5.3-1.3-4.3-1.3-6.6c0-2.3 0.4-4.5 1.3-6.5s2-3.8 3.4-5.3c1.5-1.5 3.2-2.7 5.2-3.6 2-0.9 4.2-1.3 6.5-1.3 1.8 0 3.3 0.2 4.7 0.5 1.3 0.4 2.4 0.8 3.3 1.2 1.1 0.5 1.9 1.1 2.6 1.7L115.7 57.4z"/>
    <path className="tournament" d="M9.9 66.7C8 66.8 6.6 66.1 6.3 64.9c-0.1-0.3 0-0.4 0.4-0.4 2.9 0.2 8.2-1 10-0.9 1.3 0 2.6 0.4 3 1.6 0.1 0.3 0 0.5-0.4 0.5 -1.6-0.2-3.6 0.2-5.4 0.5 0 0.8-0.2 1.8-1.1 3.4 -1.9 3.5-4.6 8-7.1 13.8 -0.1 0.3-0.3 0.3-0.5 0.1 -0.4-0.4-0.8-1.4-0.4-2.9 0.7-2.6 4.2-9.6 7.2-14.1C11.1 66.7 10.5 66.7 9.9 66.7z"/>
    <path className="tournament" d="M31.3 83.9c-2.1 0-2.9-1.3-2.6-3.1 -1.1 1.5-2.7 3.2-4.6 3 -2.3-0.2-2.3-2.5-1.6-4.6 0.3-0.8 0.7-1.8 1.2-2.7 -0.9 0.4-1.9 0.7-2.9 0.6 -0.7 2.7-2.7 5.9-5 6.6 -1.2 0.4-2.8 0.3-4.1-1.4 -1.4-1.9-0.9-4.6 0.5-7.2 1.2-2.2 3.2-4 5.1-4.1 1-0.1 1.5 0.2 2.2 1.1 0.8 1 1.7 1.2 1.5 3.5 0 0.2 0 0.4-0.1 0.6 1.8 0 3.6-1.5 4.7-3.3 0.3-0.5 0.8-1.2 1.2-1.8 0.3-0.3 0.5-0.3 0.8 0 0.7 1.1 0.5 2.4-0.6 4.3 -1.1 1.9-1.9 3.2-2.5 4.7 -0.6 1.6-0.5 2.7 0.2 2.8 1.3 0.1 3-2.1 4.7-4.9 2-3.2 2.9-5.4 3.9-6.8 0.3-0.4 0.5-0.5 0.8-0.2 0.5 0.6 0.7 2 0 3.6 -0.7 1.4-2.3 3.8-3 5.4 -0.8 1.9-0.7 3.2 0.5 3.1 1.3-0.1 3-2.2 4.2-4.4 0.2-0.3 0.4-0.3 0.6 0s0.2 1.1-0.3 2C35.2 82.3 33.2 83.9 31.3 83.9zM16.7 73.2c-0.8 0.7-1.8 1.8-2.5 3 -1.3 2.4-1.8 5.3-1 6.1 0.8 0.7 2.8-0.4 4.4-3.3 0.5-0.9 0.8-1.8 1.1-2.6C17.7 75.7 16.7 74.5 16.7 73.2zM18.3 73.2c-0.1 0.9 0.2 1.7 0.7 2.2 0.3-0.9 0.3-1.7 0.2-2.3C19.1 72.1 18.4 72.3 18.3 73.2z"/>
    <path className="tournament" d="M43.9 71.7c0.4-0.3 0.6-0.3 0.9-0.1 0.6 0.7 1.4 2.1 0.5 3.1 -1.4 1.6-3 3.7-3.5 5.3s-0.1 2.9 0.8 2.9c1.3 0.1 2.8-1.9 3.8-4.2 0.1-0.3 0.3-0.3 0.5 0 0.2 0.4 0.2 1.1-0.2 2 -0.7 1.9-2.6 3.2-4.3 3.1 -2.3-0.1-3.2-2.2-2.4-4.6 0.7-2.1 2.6-4.4 3.8-5.9 -1.4 0.9-2.8 1.2-3.7 1.2 -1.2 2.2-4.3 6.8-4.9 9.7 -0.1 0.3-0.3 0.5-0.5 0.2 -0.9-1-0.9-2.4-0.1-4.1 0.7-1.4 2.9-4.4 4.1-6.1 -1.8-1.2 1-5 2.1-5 1 0 0.7 1.8-0.1 3.8C41.6 73.1 42.7 72.6 43.9 71.7z"/>
    <path className="tournament" d="M55.7 70.8c1.1 0.2 2.1 1.7 1.3 3.4 -0.7 1.4-2.2 3.8-3 5.4 -0.8 1.9-0.6 3.4 0.5 3.3 1.3-0.1 2.9-2.2 4.1-4.4 0.2-0.3 0.4-0.3 0.5 0 0.2 0.4 0.2 1.1-0.3 2 -0.9 1.8-2.9 3.4-4.7 3.4 -2.7 0-3.4-2-2.4-4.8 1.1-3.1 3.9-6.5 3.3-6.8 -0.3-0.1-2.2 0.8-4.2 3 -1.9 2.1-3.3 5.1-4.7 8.1 -0.1 0.3-0.3 0.4-0.6 0.1 -0.6-0.6-0.8-1.7-0.3-3.3 0.6-2 3.1-6.5 5.1-9.4 0.2-0.3 0.5-0.3 0.7 0 0.5 0.8 0.5 1.9 0.1 3C52.4 72.4 54.6 70.6 55.7 70.8z"/>
    <path className="tournament" d="M69.5 71c0.3-0.4 0.5-0.5 0.8-0.2 0.5 0.6 0.7 2 0 3.6 -0.7 1.4-2.3 3.8-3.1 5.5 -0.8 1.8-0.8 3.2 0.3 3.1 1.3-0.1 3.1-2.2 4.2-4.4 0.2-0.3 0.4-0.3 0.5 0s0.1 1.1-0.3 2c-0.8 1.8-2.8 3.5-4.6 3.4 -1.7-0.1-2.6-1.1-2.6-2.6 -1 1.3-2.5 2.5-4 2.5 -3 0-3.6-4.1-0.9-7.9 2.6-3.8 5.1-5.2 6.7-5.2 1.4 0 2 1.1 2 2.3C68.8 72.2 69.2 71.5 69.5 71zM66.9 72.3c-1-0.1-3.4 2-5.1 4.8 -1.7 2.8-2.1 5.6-0.9 5.6 1.3 0 3-2 4.6-4.8C67.6 74.4 67.9 72.4 66.9 72.3z"/>
    <path className="tournament" d="M81 70.7c1.1 0 1.7 1.7 1.3 3.1 1.5-1.5 3.7-3 4.7-3 1.2 0 1.4 1.9 0.8 3.5 -0.6 1.4-2.1 3.6-2.9 5.2 -0.9 1.8-0.4 3.3 0.7 3.3 1.3 0 2.8-2.1 4-4.4 0.2-0.3 0.4-0.3 0.6-0.1s0.1 1.3-0.3 2c-0.9 1.8-2.9 3.4-4.8 3.4 -2.8 0-3.8-2.2-2.6-4.8 1.2-2.7 4-6.2 3.6-6.4 -0.3-0.1-1.3 0.3-3.4 2.3 -2.7 2.7-4.2 5.7-5.6 8.7 -0.2 0.4-0.4 0.5-0.7 0.2 -0.5-0.5-1-1.7-0.1-4 1.1-2.7 4.5-7.1 3.9-7.3 -0.4-0.2-1.9 0.7-4 2.9 -1.9 2.1-3.4 5-4.7 8 -0.1 0.3-0.3 0.4-0.6 0.2 -0.7-0.6-0.9-1.7-0.3-3.3 0.7-2 3-6.5 5-9.5 0.2-0.3 0.5-0.3 0.7 0 0.5 0.9 0.5 2.1 0 3.4C77.5 72.6 79.9 70.7 81 70.7z"/>
    <path className="tournament" d="M93.5 82.9c2.7 0.1 5-2.4 6.4-4.5 0.2-0.3 0.4-0.3 0.5 0 0.1 0.3 0 1.2-0.5 2 -1.3 2-3.8 3.4-6.3 3.5 -4.1 0.1-5.5-3.9-3.4-8.1 2.1-4.1 5.3-5.8 6.9-4.9 0.8 0.5 1.4 1 1.9 1.7 0.6 0.8 0.3 2.7-1 4.4 -1.6 1.9-3.7 2.8-5.9 0.9C91 80.8 91.8 82.8 93.5 82.9zM96.1 75.5c1-1.3 1.7-3 1.3-3.4 -0.7-0.5-3.3 1.4-4.8 4.4 -0.1 0.2-0.2 0.4-0.3 0.5C93.9 78.1 95.2 76.8 96.1 75.5z"/>
    <path className="tournament" d="M109.1 70.8c1.1 0.2 2.1 1.7 1.3 3.4 -0.7 1.4-2.2 3.8-3 5.4 -0.8 1.9-0.6 3.4 0.5 3.3 1.3-0.1 2.9-2.2 4.1-4.4 0.2-0.3 0.4-0.3 0.5 0 0.2 0.4 0.2 1.1-0.3 2 -0.9 1.8-2.9 3.4-4.7 3.4 -2.7 0-3.4-2-2.4-4.8 1.1-3.1 3.9-6.5 3.3-6.8 -0.3-0.1-2.2 0.8-4.2 3 -1.9 2.1-3.3 5.1-4.7 8.1 -0.1 0.3-0.3 0.4-0.6 0.1 -0.6-0.6-0.8-1.7-0.3-3.3 0.6-2 3.1-6.5 5.1-9.4 0.2-0.3 0.5-0.3 0.7 0 0.5 0.8 0.5 1.9 0.1 3C105.9 72.4 108.1 70.6 109.1 70.8z"/>
    <path className="tournament" d="M113.4 70c-0.3-0.4-0.1-0.7 0.4-0.6 0.9 0 1.8 0 2.7-0.1 1-1.8 1.9-3.3 2.4-4 0.3-0.4 0.6-0.4 0.8 0 0.4 0.9 0.4 2-0.4 3.6 1.3 0 1.7 0.5 2 1 0.2 0.4 0.1 0.6-0.4 0.6 -0.7-0.1-1.7 0-2.5 0.1 -1.2 2.1-3.1 5.3-4.3 7.9 -1.1 2.3-0.7 4.3 0.6 4.4 1.4 0.1 3.3-2.2 4.5-4.6 0.2-0.4 0.5-0.4 0.7 0 0.2 0.5 0 1.1-0.3 1.8 -0.4 0.9-2.5 3.7-5.1 3.7 -2.1-0.1-3.8-2.4-2.3-6.1 0.7-1.6 2-4.3 3.4-6.8C114.4 70.9 113.7 70.4 113.4 70z"/>
  </svg>
)



const PingPongBall = () => (
  <svg className="PingPongBall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <linearGradient id="PingPongBallGradient" gradientUnits="userSpaceOnUse" x1="50" y1="13.4" x2="150" y2="186.6">
      <stop offset="0" stopColor="#FFF"/>
      <stop offset="0.8238" stopColor="#2C506B"/>
    </linearGradient>
    <circle cx="100" cy="100" r="100"/>
  </svg>
)
/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import "./animation.scss"
export default function Animation() {
    return (
        <div>

            <div className='hidden' id="controls">
                <label htmlFor="rz">
                    <input type="range" id="rz" min="1" max="1" step="1" value="-1" />
                </label>
            </div>

            <label htmlFor="animation" className='hidden'>
                Enable Animation?
            </label>
            <input className='hidden' type="checkbox" id="animation" checked />

            <main className="stage">

                <div id="cybertruck">

                    <div className="body">
                        <div className="side -left">
                            <div className="top-side">
                                <div className="windows">
                                    <div className="window -driver">
                                        <button className="oops"></button>
                                    </div>
                                    <div className="window -passenger">
                                        <button className="oops"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="door -front"></div>
                            <div className="door -back"></div>
                            <div className="well -front">
                                <div className="well-plate"></div>
                            </div>
                            <div className="well -back">
                                <div className="well-plate"></div>
                            </div>
                            <div className="bumper"></div>
                        </div>
                        <div className="side -right">
                            <div className="top-side">
                                <div className="windows">
                                    <div className="window -driver">
                                        <button className="oops"></button>
                                    </div>
                                    <div className="window -passenger">
                                        <button className="oops"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="door -front"></div>
                            <div className="door -back"></div>
                            <div className="well -front">
                                <div className="well-plate"></div>
                            </div>
                            <div className="well -back">
                                <div className="well-plate"></div>
                            </div>
                            <div className="bumper"></div>
                        </div>

                        <div className="front">
                            <div className="windshield">
                                <div className="light"></div>
                            </div>
                            <div className="frunk"></div>
                            <div className="grill">
                                <div className="grill-left">
                                    <div className="light"></div>
                                </div>
                                <div className="grill-right">
                                    <div className="light"></div>
                                </div>
                                <div className="grill-front">
                                    <div className="light"></div>
                                    <div className="bumper">
                                        <div className="bumper-left"></div>
                                        <div className="bumper-right"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="trunk">
                                    <div className="trunk-side -left"></div>
                                    <div className="trunk-side -right"></div>
                                    <div className="bed">
                                        <div className="tailgate">
                                            <div className="light"></div>
                                            <div className="bumper">
                                                <div className="bumper-left"></div>
                                                <div className="bumper-right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wheels">
                        <div className="wheel -front -left">
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="hubcap"></div>
                            <div className="tread">
                                <div className="tread">
                                    <div className="tread">
                                        <div className="tread"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wheel -front -right">
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="hubcap"></div>
                            <div className="tread">
                                <div className="tread">
                                    <div className="tread">
                                        <div className="tread"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wheel -back -left">
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="hubcap"></div>
                            <div className="tread">
                                <div className="tread">
                                    <div className="tread">
                                        <div className="tread"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wheel -back -right">
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="spoke"></div>
                            <div className="hubcap"></div>
                            <div className="tread">
                                <div className="tread">
                                    <div className="tread">
                                        <div className="tread"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>
        </div>
    )
}

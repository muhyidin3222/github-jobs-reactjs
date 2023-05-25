import React from 'react'

export default function Skeleton() {
    return (
        <>
            <ul className="o-vertical-spacing o-vertical-spacing--l">
                <li className="blog-post o-media">
                    <div className="o-media__figure">
                        <span className="skeleton-box" style={{ width: 100, height: 80 }}></span>
                    </div>
                    <div className="o-media__body">
                        <div className="o-vertical-spacing">
                            <h3 className="blog-post__headline">
                                <span className="skeleton-box" style={{ width: "55%" }}></span>
                            </h3>
                            <p>
                                <span className="skeleton-box" style={{ width: "80%" }}></span>
                                <span className="skeleton-box" style={{ width: "90%" }}></span>
                                <span className="skeleton-box" style={{ width: "83%" }}></span>
                                <span className="skeleton-box" style={{ width: "80%" }}></span>
                            </p>
                            <div className="blog-post__meta">
                                <span className="skeleton-box" style={{ width: 70 }}></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="blog-post o-media">
                    <div className="o-media__figure">
                        <span className="skeleton-box" style={{ width: 100, height: 80 }}></span>
                    </div>
                    <div className="o-media__body">
                        <div className="o-vertical-spacing">
                            <h3 className="blog-post__headline">
                                <span className="skeleton-box" style={{ width: "55%" }}></span>
                            </h3>
                            <p>
                                <span className="skeleton-box" style={{ width: "80%" }}></span>
                                <span className="skeleton-box" style={{ width: "90%" }}></span>
                                <span className="skeleton-box" style={{ width: "83%" }}></span>
                                <span className="skeleton-box" style={{ width: "80%" }}></span>
                            </p>
                            <div className="blog-post__meta">
                                <span className="skeleton-box" style={{ width: 70 }}></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="blog-post o-media">
                    <div className="o-media__figure">
                        <span className="skeleton-box" style={{ width: 100, height: 80 }}></span>
                    </div>
                    <div className="o-media__body">
                        <div className="o-vertical-spacing">
                            <h3 className="blog-post__headline">
                                <span className="skeleton-box" style={{ width: "55%" }}></span>
                            </h3>
                            <p>
                                <span className="skeleton-box" style={{ width: "80%" }}></span>
                                <span className="skeleton-box" style={{ width: "90%" }}></span>
                                <span className="skeleton-box" style={{ width: "83%" }}></span>
                                <span className="skeleton-box" style={{ width: "80%" }}></span>
                            </p>
                            <div className="blog-post__meta">
                                <span className="skeleton-box" style={{ width: 70 }}></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

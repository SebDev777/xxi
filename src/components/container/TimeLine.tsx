
export default function TimeLine({ inversed, info}: { inversed: boolean, info: { title: string, description: string } }) {
    const { title, description } = info
    return inversed ? (
        <>
            <div className="timeline-component timeline-content">
                <h3 className="gradient-text">{title}</h3>
                <p>{description}</p>
            </div>
            <div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>
            <div className="timeline-empty"></div>
        </>
    ) : (
        <>
            <div className="timeline-empty"></div>
            <div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content">
                <h3 className="gradient-text">{title}</h3>
                <p>{description}</p>
            </div>    
        </>
    )
}
function JobPanel(props) {

    return (
        <div className="JobPanel">
            <a href={props.job.link}><h3>{props.job.title}</h3></a>
            <p>{props.job.company}</p>
        </div>
    );
}

export default JobPanel;

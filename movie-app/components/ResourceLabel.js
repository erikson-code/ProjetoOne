const ResourceLabel = ({status}) => {

    return (
        <span className={`tag is-larg ml-3 resource-${status}`}>
            {status}
        </span>
    )

}

export default ResourceLabel
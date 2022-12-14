

const ListItem = ({importantInfo, name}) => {
    // const {importantInfo} = props
    console.log(importantInfo)
    return (
        <div>
            <p>
                This is the ListItem.js component
            </p>
            <p>The name of this item is {name}</p>
        </div>
    )
}
export default ListItem
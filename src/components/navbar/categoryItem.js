import { MdDelete } from "react-icons/md";

function CategoryItem({id,name, color,index,onDelete }) {
  return (
    <div className="sub-item">                 
      <span className="dot" style={{ backgroundColor: color }}></span>
      {name}
      <MdDelete id="delete-icon"onClick={() => onDelete(id)}/>
    </div>
  );
}

export default CategoryItem;

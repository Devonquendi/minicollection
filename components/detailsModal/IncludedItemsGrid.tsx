import {Set} from "../../types";
import IncludedItemCard from "./IncludedItemCard";

interface IncludedItemsTableProps {
    item: Set | undefined;
}

const IncludedItemsGrid: React.FC<IncludedItemsTableProps> = ({item}) => {
    return (
        <>
            {item && item.figures && item.figures.length > 0 ?
                <div>
                    <div className='text-xl'> Included Miniatures
                        ({item.figures ? item.figures.length : null})
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {item.figures.map((figure, index) => (
                            <IncludedItemCard figure={figure} key={`${figure._id} ${index}`}/>
                        ))}
                    </div>
                </div> : null}
        </>
    );
};

export default IncludedItemsGrid;
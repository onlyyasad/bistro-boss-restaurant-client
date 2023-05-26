
import TabCard from './tabCard';

const TabItems = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                items.map(item => <TabCard key={item._id} item={item}></TabCard>)
            }
        </div>
    );
};

export default TabItems;
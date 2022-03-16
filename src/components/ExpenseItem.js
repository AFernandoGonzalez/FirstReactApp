import './ExpenceItem.css'

function ExpenseItem() {
    return (
        <div className='expence-item'>
            <div>March 15, 2022</div>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div className='expence-item__price'>$1002.01</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
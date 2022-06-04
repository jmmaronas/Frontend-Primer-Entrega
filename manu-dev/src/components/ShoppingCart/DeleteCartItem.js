function DeleteCartItem({ itemId, quitar }) {
    function botonQuitar() {
        quitar(itemId);
    }
    return (
        <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={botonQuitar}
        >
            Remove
        </button>
    );
}
export default DeleteCartItem;
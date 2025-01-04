export default function UserInput() {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <level>Initial Investment</level>
                <input type="number" required />
            </p>
            <p>
                <level>Annual Investment</level>
                <input type="number" required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <level>Expected Investment</level>
                <input type="number" required />
            </p>
            <p>
                <level>Annual Investment</level>
                <input type="number" required />
            </p>
        </div>
    </section>

}
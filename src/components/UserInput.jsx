import { useState } from 'react';

export default function UserInput( {onChange, userInput} ) {





    return <section id="user-input">
        <div className="input-group">
            <p>
                <level>Initial Investment</level>
                <input type="text" value={userInput.initialInvestment} required onChange={(event) => onChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <level>Annual Investment</level>
                <input type="text" value={userInput.annualInvestment} required onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <level>Expected Investment</level>
                <input type="text" value={userInput.expectedReturn} required onChange={(event) => onChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <level>Annual Investment</level>
                <input type="text" value={userInput.duration} required onChange={(event) => onChange('duration', event.target.value)} />
            </p>
        </div>
    </section>

}
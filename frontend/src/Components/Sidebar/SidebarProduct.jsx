import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const SidebarProduct = () => {
    const [prix, setPrix] = useState(0);
    const handleSliderChange = (e) => {
        setPrix((e.target.value));
    };

    return (
        <div>
            <table >
                <tr>
                    <td>
                        <h6>Sexe</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='sexe' value="homme" />Homme
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='sexe' value="femme" />Femme
                    </td>
                </tr>
                <tr>

                    <td>
                       <hr/>
                    </td>
                </tr>
                <tr>

                    <td>
                        <h6> Type</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='vetemments' value="tshirt" />T-Shirt
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='vetemments' value="pulls" />Pulls
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='vetemments' value="jeans" />Jeans
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='vetemments' value="shorts" />Shorts
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='vetemments' value="pantallons" />Pantalons
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='vetemments' value="chaussures" />Chaussures
                    </td>
                </tr>
                <td>
                       <hr/>
                    </td>
                <tr>

                    <td>
                        <h6> Taille</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='taille' value="s" />S
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='taille' value="l" />L
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='taille' value="m" />M
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' name='taille' value="xl" />XL
                    </td>
                </tr>
                <td>
                       <hr/>
                    </td>
                <tr>
                    <td>
                        <h6>Prix</h6>
                    </td>

                </tr>
                <tr>
                    <td>
                        <input

                            type="range"
                            min="0"
                            max="500"
                            value={prix}
                            onChange={handleSliderChange}
                        />
                        <div className='bon' >
                         
                            <span  >{prix} DT</span>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td>
          
                    </td>
                </tr>
                <td>
                       <hr/>
                    </td>
                <tr>
                    <td>
                    <button type="button" class="btn btn-outline-success mt-2">Valider</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default SidebarProduct
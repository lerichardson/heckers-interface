import React, { useState } from "react";
import "../styles/card.css";
import { DiscordActionRow, DiscordButton } from "@skyra/discord-components-react";

function Card() {
    const [command, setCommand] = useState("");
    var [resp, setResp] = useState("");
    function HandleChange(sys) {
        setCommand(sys.target.value);
    }
    function CheckReply(sys) {
        sys.preventDefault();
        const parsedCommand = command.split(" ");
        if (parsedCommand[0] !== "sudo") {
            resp = "Command requires elevated privileges. Try ruuning with sudo.";
        } else if (parsedCommand[1] !== "heck") {
            resp = "Command not found!";
        } else if (!parsedCommand[2]) {
            resp = "Please enter a user to heck!";
        } else {
            resp = `${parsedCommand[2]} has been hecked!`;
        }
        setResp(resp);
    }
    return (
        <div className="card-outer">
            <div className="card-body">
                <h1 className="title-heck">Heck someone</h1>
                <p className="subtitle-heck">Hello, hecker, who would you like to heck?</p>
            </div>
            <div className="card-form">
                <form onSubmit={CheckReply}>
                    <div className="sbs">
                        <div className="input-pre">
                            <pre>
                                <code>
                                    $
                                </code>
                            </pre>
                        </div>
                        <input type="text" placeholder="Enter command" name="command" value={command} onChange={HandleChange} className="command-input caret-stn" />
                    </div>
                    <DiscordActionRow>
                        <button type="submit" className="btn-heck">Heck</button>
                    </DiscordActionRow>
                </form>
            </div>
            <hr />
            <div className="card-resp">
                <pre>
                    <code>
                        {Math.floor(Date.now() / 1000)}: Ready<br />
                        {Math.floor(Date.now() / 1000) + 2}: {command}<br />
                        {resp}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export { Card };
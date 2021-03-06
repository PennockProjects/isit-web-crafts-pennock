import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PairedDropDowns from "../controls/PairedDropDowns";
import NavButtons from "../controls/NavButtons";
import RaisedButton from "material-ui/RaisedButton";
import PreObjectKeys from "../controls/PreObjectKeys";

class MakeHtmlContainer extends React.Component {
    constructor(props) {
        console.log("MakeHtmlContainer constructor");

        super(props);
    }

    render() {
        console.log(
            "MakeHtmlContainer render stage " + this.props.configLoading
        );
        if (this.props.configLoading === 1) {
            return <h1>Loading...</h1>;
        } else if (this.props.configLoading === 2) {
            return (
                <MuiThemeProvider>
                    <div>
                        <h1>Make Html</h1>

                        <PairedDropDowns
                            onChangeLeft={this.props.changeSite}
                            onChangeRight={this.props.changeDest}
                            pairArrayLeft={this.props.siteDirs}
                            pairArrayRight={this.props.destDirs}
                            value={this.props.value}
                        />
                        <RaisedButton
                            id="generate"
                            style={buttonStyle}
                            primary={true}
                            onClick={this.props.generateHtml}
                        >
                            Generate Html
                        </RaisedButton>
                        <PreObjectKeys
                            preId="configSummary"
                            loadingStage={this.props.generateHtmlLoading}
                            objectKeys={this.props.generateHtmlResult}
                        />
                        <NavButtons />
                    </div>
                </MuiThemeProvider>
            );
        } else {
            return null;
        }
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 0"
};

export default MakeHtmlContainer;

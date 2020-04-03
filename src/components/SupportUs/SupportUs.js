import React from "react";
import {
  Paper,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import Sponsors from "./Sponsors";
import SectionFinance from "./SectionFinance";
import SectionMaterialHelp from "./SectionMaterialHelp";
import SectionVolunteering from "./SectionVolunteering";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./SupportUs.module.css";

const SupportUs = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={styles.margin}>
            <Typography variant="h5">
              <span className={styles.titleSection}>Wsparcie finansowe</span>
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SectionFinance />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={styles.margin}>
            <Typography variant="h5">
              <span className={styles.titleSection}>Pomoc rzeczowa</span>
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SectionMaterialHelp />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={styles.margin}>
            <Typography variant="h5">
              <span className={styles.titleSection}>Zostań wolontariuszem</span>
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SectionVolunteering />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Paper elevation={3} style={{ margin: "30px 0" }}>
        <Sponsors />
      </Paper>
    </div>
  );
};

export default SupportUs;

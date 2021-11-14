import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import HelperModal from "../shared/HelperModal";

export default function TimeLine() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className="pt-2">
      <Paper elevation={3}>
        <h1 className="text-center text-4xl mt-4">{t("description.work")}</h1>
        <Timeline className={classes.timeline} align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              {t("description.workOne")}
              <HelperModal />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              {t("description.workTwo")}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              {t("description.workThree")}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              {t("description.newCompany")}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>
    </div>
  );
}

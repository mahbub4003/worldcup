const {
  editPlayerInfoTheMatch,
  editPlayerInfo,
  editScheduleInfo,
} = require("./addRunBallUtility");

export const addRunBallCloudFunction = ({
  addBall,
  addRun,
  ballerId,
  considRunToday,
  ballingToday,
  bollerMainProfile,
  onStricker,
  onStrickerMainProfile,
  nonStricker,
  nonStrickerMainProfile,
  schedule,
  scheduleId,
  boundary,
}) => {
  //Right Ball Functionality Start From Hear

  if (addBall == "rightBall" && (addRun == "1" || addRun == "3")) {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        considRunToday: considRunToday + parseInt(addRun),
        ballingToday: ballingToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        totalRun: onStricker?.totalRun + parseInt(addRun),
        playedBall: onStricker?.playedBall + 1,
        onStricke: false,
      }),
      id: onStricker?.id,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        onStricke: true,
      }),
      id: nonStricker?.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        TotalConsidRun: bollerMainProfile.TotalConsidRun + parseInt(addRun),
        totalBaliing: bollerMainProfile.totalBaliing + 1,
      }),
      id: bollerMainProfile.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        totalRun: onStrickerMainProfile?.totalRun + parseInt(addRun),
        totalUseBall: onStrickerMainProfile?.totalUseBall + 1,
      }),
      id: onStrickerMainProfile?.id,
    });
    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam: schedule?.totalRunBatFistTeam + parseInt(addRun),
          overFirstBallTeam: schedule?.overFirstBallTeam + 1,
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam:
            schedule?.totalRunBatSecondTeam + parseInt(addRun),
          overSecondBallTeam: schedule?.overSecondBallTeam + 1,
        }),
        id: scheduleId,
      });
    }
  }

  if (
    addBall == "rightBall" &&
    (addRun == "2" || boundary == "four" || boundary == "six")
  ) {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        considRunToday: considRunToday + parseInt(addRun),
        ballingToday: ballingToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        totalRun: onStricker?.totalRun + parseInt(addRun),
        playedBall: onStricker?.playedBall + 1,
        four: boundary == "four" ? onStricker?.four + 1 : onStricker?.four,
        six: boundary == "six" ? onStricker?.six + 1 : onStricker?.six,
      }),
      id: onStricker?.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        TotalConsidRun: bollerMainProfile.TotalConsidRun + parseInt(addRun),
        totalBaliing: bollerMainProfile.totalBaliing + 1,
      }),
      id: bollerMainProfile.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        totalRun: onStrickerMainProfile?.totalRun + parseInt(addRun),
        totalUseBall: onStrickerMainProfile?.totalUseBall + 1,
      }),
      id: onStrickerMainProfile?.id,
    });
    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam: schedule?.totalRunBatFistTeam + parseInt(addRun),
          overFirstBallTeam: schedule?.overFirstBallTeam + 1,
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam:
            schedule?.totalRunBatSecondTeam + parseInt(addRun),
          overSecondBallTeam: schedule?.overSecondBallTeam + 1,
        }),
        id: scheduleId,
      });
    }
  }
  //Right Ball Functionality End Hear....

  //Right Ball with By Run Functionality Start From Hear
  if (addBall == "byRunRightBall" && (addRun == "1" || addRun == "3")) {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        ballingToday: ballingToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        playedBall: onStricker?.playedBall + 1,
        onStricke: false,
      }),
      id: onStricker?.id,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        onStricke: true,
      }),
      id: nonStricker?.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        totalBaliing: bollerMainProfile.totalBaliing + 1,
      }),
      id: bollerMainProfile.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        totalUseBall: onStrickerMainProfile?.totalUseBall + 1,
      }),
      id: onStrickerMainProfile?.id,
    });
    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam: schedule?.totalRunBatFistTeam + parseInt(addRun),
          overFirstBallTeam: schedule?.overFirstBallTeam + 1,
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam:
            schedule?.totalRunBatSecondTeam + parseInt(addRun),
          overSecondBallTeam: schedule?.overSecondBallTeam + 1,
        }),
        id: scheduleId,
      });
    }
  }

  if (addBall == "byRunRightBall" && (addRun == "2" || boundary == "four")) {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        ballingToday: ballingToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        playedBall: onStricker?.playedBall + 1,
      }),
      id: onStricker?.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        totalBaliing: bollerMainProfile.totalBaliing + 1,
      }),
      id: bollerMainProfile.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        totalUseBall: onStrickerMainProfile?.totalUseBall + 1,
      }),
      id: onStrickerMainProfile?.id,
    });
    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam: schedule?.totalRunBatFistTeam + parseInt(addRun),
          overFirstBallTeam: schedule?.overFirstBallTeam + 1,
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam:
            schedule?.totalRunBatSecondTeam + parseInt(addRun),
          overSecondBallTeam: schedule?.overSecondBallTeam + 1,
        }),
        id: scheduleId,
      });
    }
  }

  //Right Ball with By Run Functionality Start From Hear
  //WD Ball Functionality Start From Hear
  if (addBall == "wd") {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        considRunToday: considRunToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfo({
      data: JSON.stringify({
        TotalConsidRun: bollerMainProfile.TotalConsidRun + 1,
      }),
      id: bollerMainProfile.id,
    });

    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam: schedule?.totalRunBatFistTeam + 1,
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam: schedule?.totalRunBatSecondTeam + 1,
        }),
        id: scheduleId,
      });
    }
  }

  //WD Ball Functionality End Hear

  //WD Ball with By Run Functionality Start From Hear

  if (addBall == "wdWithBy" && (addRun == "1" || addRun == "3")) {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        considRunToday: considRunToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        onStricke: false,
      }),
      id: onStricker?.id,
    });

    editPlayerInfoTheMatch({
      data: JSON.stringify({
        onStricke: true,
      }),
      id: nonStricker?.id,
    });

    editPlayerInfo({
      data: JSON.stringify({
        considRunToday: considRunToday + 1,
      }),
      id: bollerMainProfile.id,
    });

    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam:
            schedule?.totalRunBatFistTeam + 1 + parseInt(addRun),
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam:
            schedule?.totalRunBatSecondTeam + 1 + parseInt(addRun),
        }),
        id: scheduleId,
      });
    }
  }

  if (addBall == "wdWithBy" && (addRun == "2" || addRun == "4")) {
    console.log("ok");
    editPlayerInfoTheMatch({
      data: JSON.stringify({
        considRunToday: considRunToday + 1,
      }),
      id: ballerId,
    });

    editPlayerInfo({
      data: JSON.stringify({
        considRunToday: considRunToday + 1,
      }),
      id: bollerMainProfile.id,
    });

    if (onStricker.teamId == schedule?.batFirstTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatFistTeam:
            schedule?.totalRunBatFistTeam + 1 + parseInt(addRun),
        }),
        id: scheduleId,
      });
    } else if (onStricker.teamId == schedule?.batSecondTeamId) {
      editScheduleInfo({
        data: JSON.stringify({
          totalRunBatSecondTeam:
            schedule?.totalRunBatSecondTeam + 1 + parseInt(addRun),
        }),
        id: scheduleId,
      });
    }
  }

  //WD Ball with By Run Functionality Start From Hear
};

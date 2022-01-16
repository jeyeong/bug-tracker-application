const defaultCounts = {
  Critical: 0,
  Medium: 0,
  Low: 0,
};

// Groups tickets first by project ID and second by priority
const groupTicketCounts = (ticketCounts) => {
  const res = {};
  for (let tc of ticketCounts) {
    if (!(tc.project_id in res)) {
      res[tc.project_id] = { ...defaultCounts };
    }
    res[tc.project_id][tc.priority] = tc.count;
  }
  return res;
}

// Groups tickets by priority
const countTicketsByPriority = (ticketCounts) => {
  const res = { ...defaultCounts };
  for (let tc of ticketCounts) {
    res[tc.priority] += parseInt(tc.count);
  }
  return res;
}

export { defaultCounts, groupTicketCounts, countTicketsByPriority };
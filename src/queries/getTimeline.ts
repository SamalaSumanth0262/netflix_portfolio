// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';

const GET_TIMELINE = `
  query {
    allTimelines {
      type
      name
      title
      techStack
      summaryPoints
      dateRange
    }
  }
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
  return data.allTimelines;
}
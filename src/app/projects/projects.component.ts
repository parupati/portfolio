import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'AI Agents — PRD to Architecture',
      subtitle: 'Agentic Pre-Development Accelerator',
      tag: 'A2A · AI Agents',
      technologies: 'OpenAI Agents SDK, FastAPI, Python, Node.js, Express, LangChain, PlantUML, OpenAPI 3.0, PostgreSQL, Docker',
      githubUrl: 'https://github.com/parupati/AI_Agents-prd_to_jira',
      demoUrl: '',
      description: [
        'Multi-agent A2A pipeline that transforms a Product Requirements Document (PRD) into a full suite of pre-development architecture artifacts — accelerating the path from idea to engineering kickoff.',
        'Agent 1 parses the PRD and extracts structured functional requirements; Agent 2 designs a normalized PostgreSQL schema with full SQL DDL; Agent 3 converts the schema into PlantUML ER diagrams.',
        'Agent 4 consumes the PRD + schema to produce a complete OpenAPI 3.0.3 contract (Swagger-compatible); Agent 5 generates PlantUML sequence diagrams from the architecture — each agent feeds directly into the next.',
        'Supports both batch and real-time streaming (SSE) modes; FastAPI backend runs in Docker on port 8000 with a Node.js/Express UI on port 3000.',
      ],
    },
    {
      title: 'Aviation Disruption RAG',
      subtitle: 'Retrieval-Augmented Generation for Aviation Intelligence',
      tag: 'RAG · LLM',
      technologies: 'Python, FastAPI, LangChain, ChromaDB, HuggingFace, OpenAI GPT-4o, Hugging Face Spaces, Docker',
      githubUrl: 'https://github.com/parupati/IranUSAviationDisruptionRAG',
      demoUrl: '/aviationRag',
      description: [
        'RAG system built on the Global Civil Aviation Disruption 2026 dataset — covering airline losses, airport disruptions, airspace closures, flight cancellations, and reroutes from the Iran-US conflict.',
        'CSV data is converted to natural language chunks, embedded using HuggingFace sentence-transformers (all-MiniLM-L6-v2) on CPU, and indexed in a local ChromaDB vector store.',
        'FastAPI backend exposes a /query endpoint that retrieves the top-k relevant chunks via similarity search and feeds them to GPT-4o for grounded answer generation.',
        'Deployed as a Docker container on Hugging Face Spaces with an interactive chat UI integrated into this portfolio.',
      ],
    },
  ];

  getTechList(technologies: string): string[] {
    return technologies.split(',').map(t => t.trim());
  }

  isExternalUrl(url: string): boolean {
    return url.startsWith('http');
  }
}

import { aws_ecr as ecr } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Properties for 'SampleRepositoryProps'.
 */
export interface SampleRepositoryProps {

  /**
   * Repository name.
   */
  readonly name: string;
}

/**
 * SampleRepository is a repository that only allows configuring its.
 */
export class SampleRepository extends Construct {
  constructor(scope: Construct, id: string, props: SampleRepositoryProps) {
    super(scope, id);

    new ecr.Repository(this, 'Repository', {
      repositoryName: props.name,
    });

  }
}